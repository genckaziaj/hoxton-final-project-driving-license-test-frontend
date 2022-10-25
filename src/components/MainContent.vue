<template>
  <div class="main">
    <div class="container-md px-xl-0 px-lg-3 px-md-0 px-4">
      <div class="row gx-5">
        <div class="col-lg-4">
          <div class="pricing">
            <div class="pricing-head">
              <h4>Kategoria A1, A2, B1, B</h4>
              <i class="far fa-list-alt"></i>
            </div>
            <ul class="mb-3">
              <li><strong>Lloji i testit teorik:</strong> Kategoria Bazë</li>
              <li><strong>Koha:</strong> 40 minuta</li>
              <li><strong>Pyetje në total:</strong> 40</li>
              <li><strong>Gabime të lejuara:</strong> 4</li>
            </ul>
            <div class="pricing-footer">
              <router-link to="/test/">Lista e testeve</router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pricing">
            <div class="pricing-head">
              <h4>Pyetje te rastit</h4>
              <i class="fas fa-question-circle"></i>
            </div>
            <ul class="mb-3">
              <li><strong>Lloji i testit teorik:</strong> Kategoria Bazë</li>
              <li><strong>Koha:</strong> 1 minutë për pyetje</li>
              <li><strong>Pyetjet gjenerohen në mënyrë rastësore</strong></li>
              <li><strong>Përfshihen të gjitha pyetjet e DPSHTRR</strong></li>
            </ul>
            <div class="pricing-footer">
              <a>Pyetje te rastit</a>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="pricing">
            <div class="pricing-head">
              <h4>Test i rastit</h4>
              <i class="far fa-question-circle"></i>
            </div>
            <ul class="mb-3">
              <li><strong>Lloji i testit teorik:</strong> Kategoria Bazë</li>
              <li><strong>Koha:</strong> 40 minuta</li>
              <li><strong>Pyetje në total:</strong> 40</li>
              <li><strong>Gabime të lejuara:</strong> 4</li>
            </ul>
            <div class="pricing-footer">
              <a>Test i rastit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  padding-bottom: 50px;
}

.main .pricing {
  position: relative;
  margin-bottom: 15px;
  border: 3px solid #eee;
  background: #fff;
}

.main .pricing .pricing-head {
  text-align: center;
}

.main .pricing .pricing-head h4 {
  background-color: #e7eff7;
  color: #355dae;
  padding: 12px 0;
  border-bottom: none;
  font-weight: bold;
  margin: 0;
  font-size: 17px;
  font-family: "Open Sans", sans-serif;
  line-height: 1.1;
}

.pricing-head i {
  font-size: 26px;
  line-height: 14px;
  margin-top: 23px;
  color: #355dae;
}

.pricing ul {
  margin-top: 0;
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
}

.pricing ul li {
  color: #888;
  font-size: 12px;
  padding: 7px 15px;
  border-bottom: 1px solid #f5f9e7;
}

.pricing .pricing-footer {
  color: #777;
  font-size: 11px;
  line-height: 17px;
  text-align: center;
  padding: 0 20px 19px;
}

.pricing .pricing-footer a {
  display: inline-block;
  background-color: #355dae;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.18);
  border-radius: 2px;
  border-width: 0;
  overflow: hidden;
  position: relative;
  padding: 9px 14px 8px;
  border-color: #219187;
  outline: 0;
  margin-bottom: 0;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
}

.pricing .pricing-footer a:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2), 0 3px 6px rgba(0, 0, 0, 0.26);
  text-decoration: none;
  cursor: pointer;
  outline: 0;
}

.pricing .pricing-footer a:focus {
  outline: 0;
  text-decoration: none;
  outline-offset: -2px;
}

.pricing .pricing-footer a:active {
  box-shadow: 0 8px 18px rgb(0 0 0 / 22%), 0 6px 6px rgb(0 0 0 / 26%);
  background-color: #1f897f;
}
</style>
