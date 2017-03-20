import React from 'react';
import styles from './_OurProcess.scss';

import { Grid } from 'react-bootstrap'

import bg from './images/noisy_grid.png'

class OurProcess extends React.Component {
  render () {
    return (
      <div style={{ backgroundImage: `url(${bg})` }} >
        <Grid>
          <div className="page-header">
            <h1>Our Process</h1>
          </div>
          <ul className={styles.timeline}>
            <li className={styles.normal}>
              <div className={styles.badge}><i className="glyphicon glyphicon-check"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="title">Step 1</h4>
                  <p><small className="text-muted"><i className="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
                </div>
                <div className={styles.body}>
                  <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                </div>
              </div>
            </li>
            <li className={styles.inverted}>
              <div className={styles.badge +' '+ styles.warning}><i className="glyphicon glyphicon-credit-card"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="title">Step 2</h4>
                </div>
                <div className={styles.body}>
                  <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere
                    pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.</p>
                </div>
              </div>
            </li>
            <li className={styles.normal}>
              <div className={styles.badge +' '+ styles.danger}><i className="glyphicon glyphicon-credit-card"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="title">Step 3</h4>
                </div>
                <div className={styles.body}>
                  <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                </div>
              </div>
            </li>
            <li className={styles.inverted}>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="timeline-title">Step 4</h4>
                </div>
                <div className={styles.body}>
                  <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                </div>
              </div>
            </li>
            <li className={styles.normal}>
              <div className={styles.badge +' '+ styles.info}><i className="glyphicon glyphicon-floppy-disk"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="timeline-title">Step 5</h4>
                </div>
                <div className={styles.body}>
                  <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                  <hr/>
                  Actions
                </div>
              </div>
            </li>
            <li className={styles.normal}>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="timeline-title">Step 6</h4>
                </div>
                <div className={styles.body}>
                  <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                </div>
              </div>
            </li>
            <li className={styles.inverted}>
              <div className={styles.badge +' '+ styles.success}><i className="glyphicon glyphicon-thumbs-up"></i></div>
              <div className={styles.panel +' panel'}>
                <div className="timeline-heading">
                  <h4 className="timeline-title">Mussum ipsum cacilds</h4>
                </div>
                <div className={styles.body}>
                  <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo.
                    Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
                </div>
              </div>
            </li>
          </ul>
        </Grid>
      </div>
    )
  }
}

export default OurProcess

