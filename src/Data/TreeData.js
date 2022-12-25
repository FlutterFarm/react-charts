const TreeData = [
    {
      table_name: "table1",
      type : "dir",
      table_schema: "hr",
      columns: [
        { name: "columnA", type: "integer" },
        { name: "columnB", type: "integer" },
        { name: "columnC", type: "integer" },
        { name: "columnD", type: "integer" }
      ],
      primary_keys: ["columnA"],
      foreign_keys: [
        {
          type : "dir",            
          toTable: "table2",
          toTableSchema: "hr",
          fromColumn: "columnA",
          fromColumnType: "many",
          toColumn: "columnC",
          toColumnType: "zero"
        },
        {
          type : "dir",            
          toTable: "table3",
          toTableSchema: "hr",
          fromColumn: "columnB",
          toColumn: "columnD"
        }
      ]
    },
    {
      table_name: "table2",
      type : "dir",      
      columns: [
        { name: "columnC", type: "integer" },
        { name: "columnD", type: "varchar" }
      ],
      foreign_keys: [
        {
          type : "dir",            
          toTable: "table4",
          toTableSchema: "hr",
          fromColumn: "columnD",
          toColumn: "columnD"
        },
        {
            type : "dir",                        
            toTable: "table5",
            toTableSchema: "hr",
            fromColumn: "columnD",
            toColumn: "columnD"
          },
          {
            type : "dir",                        
            toTable: "table6",
            toTableSchema: "hr",
            fromColumn: "columnD",
            toColumn: "columnD"
          }                  
      ],
      table_schema: "hr"
    },
    {
      type : "dir",                    
      table_name: "table3",
      columns: [
        { name: "columnD", type: "integer" },
        { name: "columnF", type: "varchar" }
      ],
      foreign_keys: [
        {
            type : "dir",                        
            toTable: "table7",
            toTableSchema: "hr",
            fromColumn: "columnD",
            toColumn: "columnD"
        },
        {
            type : "dir",                        
            toTable: "table8",
            toTableSchema: "hr",
            fromColumn: "columnD",
            toColumn: "columnD"
        },
        {
            type : "dir",                        
            toTable: "table9",
            toTableSchema: "hr",
            fromColumn: "columnD",
            toColumn: "columnD"
        }                                        
      ],
      table_schema: "hr"
    },
    {
      type : "dir",                    
      table_name: "table4",
      columns: [
        { name: "columnD", type: "integer" },
        { name: "columnF", type: "varchar" }
      ],
      foreign_keys: [
      ],
      table_schema: "hr"
    },
    {
      type : "dir",                    
      table_name: "table5",
      columns: [
        { name: "columnD", type: "integer" },
        { name: "columnF", type: "varchar" }
      ],
      foreign_keys: [
      ],
      table_schema: "hr"
    },
    {
      table_name: "table6",
      type : "dir",                  
      columns: [
        { name: "columnD", type: "integer" },
        { name: "columnF", type: "varchar" }
      ],
      foreign_keys: [
      ],
      table_schema: "hr"
    },
    {
      table_name: "table7",
      type : "dir",                  
      columns: [
        { name: "columnD", type: "integer" },
        { name: "columnF", type: "varchar" }
      ],
      foreign_keys: [
      ],
      table_schema: "hr"
    },
    {
      table_name: "table8",
      type : "dir",                  
      columns: [
        { name: "columnD", type: "integer" },
        { name: "columnF", type: "varchar" }
      ],
      foreign_keys: [
      ],
      table_schema: "hr"
    },
    {
      table_name: "table9",
      type : "dir",                  
      columns: [
        { name: "columnD", type: "integer" },
        { name: "columnF", type: "varchar" }
      ],
      foreign_keys: [
      ],
      table_schema: "hr"
    }
  ];

export default TreeData;