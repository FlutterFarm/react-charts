import React from "react";
import Tree from "react-d3-tree";

const debugData = [
  {
    name: "",
    attributes: {
      title: "Card title",
      subtitle: "Card subtitle",
      text: "Some text to build on the card."
    },
    children: [
      {
        name: "",
        attributes: {
          title: "Card title",
          subtitle: "Card subtitle",
          text: "Some text to build on the card."
        },
        children: [
          {
            name: "child2",
            attributes: {
              title: "child2",
              subtitle: "Card subtitle",
              text: "Some text to build on the card."
            }
          },
          {
            name: "child2",
            attributes: {
              title: "child3",
              subtitle: "Card subtitle",
              text: "Some text to build on the card."
            }
          }
        ]
      },
      {
        name: "",
        attributes: {
          title: "Card title",
          subtitle: "Card subtitle",
          text: "Some text to build on the card."
        }
      },
      {
        name: "",
        attributes: {
          title: "Card title",
          subtitle: "Card subtitle",
          text: "Some text to build on the card."
        }
      }
    ]
  }
];
const containerStyles = {
  width: "100%",
  height: "100vh"
};

const Card = ({ nodeData }) => (
  <div>
    <div className="card">
      <div className="card-body">
        <h5 style={{ margin: "5px" }} className="card-title">
          {nodeData.attributes.title}
        </h5>
        <h6 style={{ margin: "5px" }} className="card-subtitle mb-2 text-muted">
          {nodeData.attributes.subtitle}
        </h6>
        <p style={{ margin: "5px" }} className="card-text">
          {nodeData.attributes.text}
        </p>
      </div>
    </div>
  </div>
);

export default class CenteredTree extends React.PureComponent {
  state = {};
  height = 80;
  width = 150;
  yOffset = 80;
  yClearance = 150;

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: this.yOffset
      }
    });
  }

  click = event => {
    console.log(event);
  };

  over = event => {
    console.log(event);
  };

  render() {
    return (
      <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree
          data={debugData}
          collapsible={false}
          translate={this.state.translate}
          scaleExtent={{ min: 1, max: 3 }}
          allowForeignObjects
          pathFunc="elbow"
          orientation="vertical"
          nodeSvgShape={{ shape: "none" }}
          nodeSize={{ x: 300, y: this.yClearance }}
          onClick={e => this.click(e)}
          onMouseOver={e => this.over(e)}
          nodeLabelComponent={{
            render: <Card />,
            foreignObjectWrapper: {
              style: {
                background: "lightblue",
                border: "1px solid black",
                width: this.width.toString() + "px",
                height: this.height.toString() + "px",
                x: this.width / -2,
                y: this.height / -2
              }
            }
          }}
        />
      </div>
    );
  }
}
