module.exports = (data) => {
  var items = "";
  for (var i = 0; i < data.data.length; i++) {
    items += `<tr class="table">
          <td class="col-md-9">${data.data[i].itemName}</td>
          <td class="col-md-9">${data.data[i].campanysName}</td>
          <td class="col-md-3">${data.data[i].itemPrice} DT</td>
          <td class="col-md-3">${data.data[i].quantity}</td>
        </tr>`;
  }
  return `
  <!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@800&family=Syne&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&family=Staatliches&family=Syne&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
      crossorigin="anonymous"
    />
  </head>
  <body>
  <style>

.key{
  text-align: center;
}
.total{
  float : right;
}

.container{
  background-color: white;
}

.two {
  margin-left: auto;
  margin-right: auto;
}

.main thead {
  background: #1E1F23;
  color: #fff
}


h1 {
  text-align: center
}

  </style>
  <div class="container" id="contentToConvert">
    <br />
    <br />

    <div class="two">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-8 text-right">
            <h4 style="color: #f81d2d"><strong>JIPPI</strong></h4>
            <p>YOUR BEST WEBSITE FOR SHOPING ONLINE</p>
            <p>+216 90 441 567 / 90 255 853 / 23 472 929</p>
            <p>jipp.pi.17@gmail.com</p>
          </div>
        </div>
        <br />
        <div>
          <div class="key">
            <h2>YOUR RECEIPT KEY IS:</h2>
            <h5> ${data.order} </h5>
          </div>
        </div>
        <br />
        <div id="row">
          <table class="table">
            <thead>
              <tr>
                <th>
                  <h5>Your items</h5>
                </th>
                <th>
                  <h5>Company</h5>
                </th>
                <th>
                  <h5>Amount</h5>
                </th>
                <th>
                  <h5>Quantity</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              ${items}
            </tbody>
          </table>
          <br />
          <br />
        </div>
        <tr style="color: #f81d2d">
          <td>
            <h4 class="total">
              <strong>Total: ${data.data[0].total} DT</strong>
            </h4>
          </td>
        </tr>
        <br />
        <br />
        <div>
          <div class="col-md-12">
            <p><b>Date :</b>${data.date.split("T")[0]}</p>
            <br />
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
  </body>
  </html>
    `;
};
