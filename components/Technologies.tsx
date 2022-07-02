import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiSass,
  DiGit,
  DiTerminal,
  DiBootstrap,
  DiJsBadge,
  DiNodejsSmall,
} from 'react-icons/di'
import {
  SiFirebase,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiGithub,
  SiDocker,
  SiExpress,
  SiCypress,
  SiPython,
} from 'react-icons/si'
import { Container, Row, Col } from 'react-bootstrap'
import { motion } from 'framer-motion'
import { stagger, child } from '../animations'

const Technologies = () => {
  return (
    <div id="skills">
      <motion.div className="text-center pt-5">
        <h1>SKILLS</h1>
      </motion.div>
      <Container className="min-vh-100 d-flex align-items-center justify-content-center mb-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          // viewport={{ once: true }}
          variants={stagger(0.1)}
          className="row row-cols-2 row-cols-md-4 fw-bold"
        >
          {/* <motion.div variants={child} className="col col-12 text-center pb-5 mb-5">
            <h1>SKILLS</h1>
          </motion.div> */}
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <DiHtml5 size="5rem" />
            </motion.div>

            <p>HTML5</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <DiCss3 size="5rem" />
            </motion.div>

            <p>CSS3</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <DiJsBadge size="5rem" />
            </motion.div>
            <p>JAVASCRIPT + ES6</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <SiTypescript size="5rem" />
            </motion.div>
            <p>TYPESCRIPT</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <SiMongodb size="5rem" />
            </motion.div>
            <p>MONGODB</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <SiExpress size="5rem" />
            </motion.div>
            <p>EXPRESS</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <DiReact size="5rem" />
            </motion.div>
            <p>REACT</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <DiNodejsSmall size="5rem" />
            </motion.div>
            <p>NODE JS</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <SiNextdotjs size="5rem" />
            </motion.div>
            <p>NEXT JS</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <SiFirebase size="5rem" />
            </motion.div>
            <p>FIREBASE</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <DiSass size="5rem" />
            </motion.div>
            <p>SASS</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <DiBootstrap size="5rem" />
            </motion.div>
            <p>BOOTSTRAP</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <SiCypress size="5rem" />
            </motion.div>
            <p>CYPRESS</p>
          </motion.div>
          {/* <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <SiGithub size="5rem" />
            </motion.div>
            <p>GITHUB</p>
          </motion.div> */}
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <DiGit size="5rem" />
            </motion.div>
            <p>GIT</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <DiTerminal size="5rem" />
            </motion.div>
            <p>TERMINAL</p>
          </motion.div>
          <motion.div variants={child} className="col text-center py-3">
            <motion.div whileHover={{ scale: 1.1 }} className="pb-3">
              <SiPython size="5rem" />
            </motion.div>
            <p>PYTHON</p>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Technologies
