import React from "react";
import Tree from 'react-d3-tree';
import { useCenteredTree } from "./helpers/Helpers";

function TreeChartSection (props) {
  console.log("tree");
  console.log(props);
    const [dimensions, translate, containerRef] = useCenteredTree();    
    const orgChart = props.data['data'];
      const containerStyles = {
        width: "100vw",
        height: "100vh"
      };
      
      const renderRectSvgNode = ({ nodeDatum, toggleNode }) => (
        <g>
          <rect width="20" height="20" x="-10" onClick={toggleNode} />
          <text fill="black" strokeWidth="1" x="20">
            {nodeDatum.name}
          </text>
          {nodeDatum?.department && (
            <text fill="black" x="20" dy="20" strokeWidth="1">
               {nodeDatum?.department}
            </text>
          )}
        </g>
      );    
        
    return(
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-center chartpadding" style={containerStyles} ref={containerRef}>
            <p className="hero-head">
                Tree chart
            </p>          
            {
                     orgChart === undefined || orgChart === null || orgChart === '' ? (
                      <h5>No Data Found</h5>
                      ) : (
                        <Tree 
                          data={orgChart} 
                          dimensions={dimensions}
                          translate={translate}
                          renderCustomNodeElement={renderRectSvgNode}
                          orientation="horizontal"                
                        />        
                      )
                    }                
        </div>
    )
}
export default TreeChartSection;