
import React from 'react'

class Leaderboard extends React.Component {
  render () {
    let template = { __html: '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>' +
                             '<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px"' +
                             'data-ad-client="ca-pub-5283251584689528" data-ad-slot="3065653578"></ins>' +
                             '<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>' };
    return (
      <div style={{ textAlign: 'center' }} dangerouslySetInnerHTML={template} />
    )
  }
}

export default Leaderboard
