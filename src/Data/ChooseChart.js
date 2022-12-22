import { v4 as uuidv4 } from 'uuid';

export let ChooseChart = [
    {
        id: uuidv4(),
        img_url : "/assets/images/Charts/Stacked.png",
        value: false,
        redirect : "handlecheck",
        variable : "Stacked"
    },
    {
        id: uuidv4(),
        img_url : "/assets/images/Charts/Donut.png",
        value: false,
        redirect : "handlecheckDonut",        
        variable : "Donut"
    },
    {
        id: uuidv4(),
        img_url : "/assets/images/Charts/Line.png",
        value: false,
        redirect : "handlecheckLine",        
        variable : "Line"
    },
    {
        id: uuidv4(),
        img_url : "/assets/images/Charts/Polar.png",
        value: false,
        redirect : "handlecheckPolar",        
        variable : "Polar"
    },
    {
        id: uuidv4(),
        img_url : "/assets/images/Charts/Area.png",
        value: false,
        redirect : "handlecheckArea",        
        variable : "Area"
    },
    {
        id: uuidv4(),
        img_url : "/assets/images/Charts/Pie.png",
        value: false,
        redirect : "handlecheckPie",        
        variable : "Pie"
    },
    {
        id: uuidv4(),
        img_url : "/assets/images/Charts/HorizontalBar.png",
        value: false,
        redirect : "handlecheckHorizontal",        
        variable : "HorizontalBar"
    },
    {
        id: uuidv4(),
        img_url : "/assets/images/Charts/VerticalBar.png",
        value: false,
        redirect : "handlecheckVertical",        
        variable : "VerticalBar"
    }    
]