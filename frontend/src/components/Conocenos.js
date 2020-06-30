import React from 'react';

class Conocenos extends React.Component {
  componentDidMount() {
    document.title = "Conócenos - Cafetería Donde José Billar";
  }

  render() {
    return(
      <section class="page-section about-heading">
        <div class="container"><img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={process.env.PUBLIC_URL + "/assets/img/about.jpg"} alt="cafeteria"/>
          <div class="about-heading-content">
            <div class="row">
              <div class="col-lg-10 col-xl-9 mx-auto">
                <div class="bg-faded rounded p-5">
                  <h2 class="section-heading mb-4"><span class="section-heading-upper">Café Fuerte, Raices Fuertes</span><span class="section-heading-lower">Acerca de Nuestro Café</span></h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper ipsum quis nulla euismod, vel tempus est condimentum. Cras urna purus, scelerisque in consequat in, commodo sit amet sem. Etiam ultricies pellentesque
                      dolor sed vestibulum. Integer vitae ligula eget urna posuere euismod. Nulla facilisi.&nbsp;</p>
                  <p>Pellentesque suscipit dolor sit amet iaculis finibus. Duis tincidunt lacinia tortor, sed efficitur nisi mattis ut. Fusce elit elit, posuere at tincidunt vitae, rhoncus non ante. Cras iaculis ligula commodo lectus tristique
                      pulvinar. Etiam sed purus ac ex lobortis faucibus sit amet ac enim.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Conocenos;