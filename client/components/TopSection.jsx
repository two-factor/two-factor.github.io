import React from 'react';
import DivCLI from '../styled-components/DivCLI.jsx';
import PCLI from '../styled-components/PCLI.jsx';
import TopSection$ from '../styled-components/TopSection$.jsx';
import Spacer from '../styled-components/Spacer.jsx';
import CodeDiv from '../styled-components/CodeDiv.jsx';


const TopSection = () => {
  return (
    <TopSection$>
      <Spacer />
      <CodeDiv>
        <p>~$ npm install --save two-factor</p>
      </CodeDiv>
    </TopSection$>
  )
}

export default TopSection;