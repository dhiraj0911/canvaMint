import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div className="footer">
      <footer className="w-100 py-4 flex-shrink-0 bg-dark">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="h1 text-primary">canvaMint</h5>
                    <p className="small text-muted">canvaMint is tool you can simply create your own digital work, deploy it on IPFS as NFT</p>
                    <p className="small text-muted mb-0">&copy; Copyrights All Rights Reserved 2022 by dhiru9bari.</p>
                </div>
                <div className="col-lg-5 col-md-10">
                    <h5 className="h1 text-dark">Newsletter</h5>
                    <p className="small text-muted">Sign up to receive updates, news and informations from us!</p>
                      <form action="#">
                          <div className="input-group mb-3">
                            <input className="form-control" type="text" placeholder="Recipient's email" aria-label="Recipient's email" aria-describedby="button-addon2" />
                            <button className="btn btn-primary" id="button-addon2" type="button">Submit</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </footer>
    </div>
  );
}

export default Footer;