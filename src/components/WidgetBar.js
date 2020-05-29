import React from 'react';
import styled from 'styled-components';

const Bar = styled.nav`
  background: black;
  width: 100%;
	float: left;
	margin: 0 0 3em 0;
	padding: 0;
	list-style: none;
`;

const Widget = styled.div`

  // margin: 1%;
`;

const Info = styled.div`
  font-size: 10px; 
  color: #cccccc;
  line-break: anywhere;
  word-break: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; 
  font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;
  font-weight: 100;
`;

const Links = styled.a`
  color: #cccccc; 
  text-decoration: none;
`;

const WidgetBar = () => {
  return (
    <Bar>
      <Widget>
        <iframe width="100%" height="20" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/523536498&color=%23c3b083&inverse=true&auto_play=true&show_user=true" ></iframe>
        <Info ><Links href="https://soundcloud.com/justin_martyr" title="Justin Martyr" target="_blank" >Justin Martyr</Links> · <Links href="https://soundcloud.com/justin_martyr/dancelove" title="dance.love" target="_blank" >dance.love</Links></Info>
      </Widget>
    </Bar>
  )
}

export default WidgetBar