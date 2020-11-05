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
  <body>
  <style>
.container{
  background-color: white;
}
.key{
  text-align: center;
}
.total{
  float : right;
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
