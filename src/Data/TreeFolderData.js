const TreeFolderData = [
    {
      type: "file",
      name: "table1",
      children: [
        {
          type: "dir",
          name: "table2"
        },
        {
          type: "dir",
          name: "table3"
        }
      ]      
    },
    {
      type: "file",
      name: "App.js"
    },
    {
      type: "dir",
      name: "components",
      children: [
        {
          type: "file",
          name: "Drawer.js"
        },
        {
          type: "file",
          name: "Input.js"
        },
        {
          type: "dir",
          name: "styles",
          children: [
            {
              type: "file",
              name: "Input.scss"
            },
            {
              type: "file",
              name: "Drawer.scss"
            }
          ]
        }
      ]
    }
  ];

export default TreeFolderData;

