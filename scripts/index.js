import * as d3 from "./d3.min";

const svg = d3.selectAll('svg');
svg.style('background-color','#13d1cb')
svg.append("circle")
   .attr("cx",550)
   .attr("cy",250)
   .attr("r",150)
   .attr("fill",'yellow')
   .attr("stroke", 'cadetblue')
   .attr("stroke-width",2);
