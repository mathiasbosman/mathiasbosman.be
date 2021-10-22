import React from "react";
import "../styles/main.scss";
import {Box} from "@primer/components";
import {LAYOUT_WIDTH} from "../Constants";
import Footer from "../components/Footer";
import Bio from "../components/cv/Bio";
import ExperienceAndEducation from "../components/cv/ExperienceAndEducation";
import SkillsSection from "../components/cv/SkillsSection";
import Awards from "../components/cv/Awards";
import Contact from "../components/cv/Contact";
import ProjectsSection from "../components/cv/ProjectsSection";

export default class Home extends React.Component {
  render() {
    return <main itemScope="itemScope" itemType="https://schema.org/Person">
      <Box
          borderWidth="1px" borderStyle="solid" borderColor="border.default" borderRadius={2}
          boxShadow="shadows.medium" bg="canvas.default" mx="auto" p={3} maxWidth={LAYOUT_WIDTH}>
        <section>
          <Bio/>
        </section>
        <section>
          <Box display="flex" className="responsiveWrap" justifyItems="space-between">
            <Box flexBasis="100%" as="section" px={3}>
              <ExperienceAndEducation/>
            </Box>
            <Box flexBasis="100%" as="section" px={3}>
              <SkillsSection/>
              <Awards/>
            </Box>
          </Box>
        </section>
        <Box px={3}>
          <ProjectsSection/>
          <Contact/>
        </Box>
        <Footer/>
      </Box>
    </main>;
  }
}
