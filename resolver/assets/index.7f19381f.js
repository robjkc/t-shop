import { LitElement as h, html as l, css as g } from "lit";
class p extends h {
  static get properties() {
    return {
      url: { type: String },
      color: { type: String },
      scale: { type: String }
    };
  }
  firstUpdated(m) {
    const t = this.scale ? +this.scale : 1, n = `${252 * t}px`, a = `${300 * t}px`, s = 75 * t, e = 75 * t, r = `${87 * t}px`, c = `${65 * t}px`;
    Object.assign(this.shadowRoot.getElementById("tshirt-div").style, {
      width: n,
      height: a,
      position: "relative",
      backgroundColor: this.color,
      margin: "auto"
    }), Object.assign(this.shadowRoot.getElementById("t-shirt-basic").style, {
      width: n,
      height: a
    }), Object.assign(this.shadowRoot.getElementById("tshirt-canvas").style, {
      position: "absolute",
      left: r,
      top: c
    });
    const i = this.shadowRoot.getElementById("tshirt-canvas"), d = i.getContext("2d"), o = new Image();
    o.addEventListener(
      "load",
      function() {
        i.height = s, i.width = e, d.drawImage(o, 0, 0);
      },
      !1
    ), console.log(s, e), o.src = `${this.url}&auto=format&fit=crop&w=${s}&h=${e}`;
  }
  constructor() {
    super();
  }
  render() {
    return l`
      <div id="tshirt-div">
        <img id="t-shirt-basic" src="https://luciferreeves.github.io/TShirtDesigner/old/img/crew_front.png" />
        <canvas id="tshirt-canvas"></canvas>
        </div>
      </div>
    `;
  }
  static get styles() {
    return g`
      :host {
        text-align: center;
      }
    `;
  }
}
window.customElements.define("product-tile", p);
export {
  p as ProductTile
};
