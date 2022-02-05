import PropTypes from "prop-types";
import {Box, ProgressBar, Text} from "@primer/react";
import React from "react";

export function SkillsElement({skill, percentage, color, className}) {
  return (
      <Box>
        <Text className={className}>{skill}</Text>
        <Box pr={3}>
          <ProgressBar bg={color} progress={percentage}/>
        </Box>
      </Box>);
}

SkillsElement.propTypes = {
  color: PropTypes.any,
  className: PropTypes.any,
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}

export default function Skills({children}) {
  return (
      <Box display="grid"
           gridTemplateColumns="1fr"
           alignItems="end" gridGap={3}>
        {children}
      </Box>);
}
Skills.propTypes = {
  children: PropTypes.any
}