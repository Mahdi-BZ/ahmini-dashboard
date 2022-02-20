import { Doughnut } from "react-chartjs-2";

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/


const data = {
  labels: ["Mariée", "Célibataire", "Divorcée","Veuve"],
  datasets: [
    {
      data: [30, 30, 5, 15],
      backgroundColor: [
        "rgb(242,165,152)",
        "rgb(255,232,157)",
        "rgb(236,107,109)",
        "rgb(122,231,125)"
      ],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ],
 
  plugins: {
    labels: {
      render: "percentage",
      fontColor: ["green", "white", "red"],
      precision: 2
    },
  }
};

export function Donut() {
 
    return (
      
        <Doughnut
          data={data}
          
        />
 
    );

}


