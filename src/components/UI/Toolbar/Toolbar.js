import "./Toolbar.css";
import "./ToolbarMobile.css";
import React, { Component } from "react";
import {
  FaPen,
  FaTag,
  FaPaperclip,
  FaQuestionCircle,
  FaBars,
  FaUser,
} from "react-icons/fa";
import { connect } from "react-redux";

class Toolbar extends Component {
  state = {
    showMobileToolBar: false,
    authenticated: false,
  };

  componentDidMount() {
    this.setState({
      authenticated: this.props.isauth,
    });
  }

  render() {
    return (
      <div
        className="ToolBarHolder"
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <div className="ToolBar">
          <div className="ToolBarPagesHolder">
            <div className="ToolBarPages">
              <div className="ToolBarPageBrand">
                <p className="Toggle">
                  <FaBars
                    style={{
                      marginRight: "20px",
                      transform: this.state.showMobileToolBar
                        ? "rotateZ(90deg)"
                        : null,
                      transition: "all .2s ease-in-out",
                    }}
                    onClick={() => {
                      const previousToolbarState = this.state.showMobileToolBar;
                      this.setState({
                        showMobileToolBar: !previousToolbarState,
                      });
                    }}
                  />
                </p>
                <a href="/" style={{ display: "flex" }}>
                  <p>Datalizr</p>
                </a>
              </div>
              <div className="ToolBarSubPages">
                <div className="ToolBarPage">
                  <a href="/dashboard">
                    <p>
                      <FaPen className="ToolbarIcon" />
                      Dashboard
                    </p>
                  </a>
                </div>
                <div className="ToolBarPage">
                  <a href="/create">
                    <p>
                      <FaPaperclip className="ToolbarIcon" /> Create
                    </p>
                  </a>
                </div>
                <div className="ToolBarPage">
                  <a href="/contribute">
                    <p>
                      <FaTag className="ToolbarIcon" /> Contribute
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {!this.state.authenticated ? (
              <div className="ToolBarPagesLogin">
                <div className="ToolBarPage">
                  <a href="/register">
                    <p>Login</p>
                  </a>
                </div>
                <div className="ToolBarPage">
                  <a href="/register" style={{ textDecoration: "none" }}>
                    <div className="ToolBarButton">
                      <p style={{ color: "rgba(255, 255, 255, 1)" }}>
                        Register
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ) : (
              <div className="ToolBarPagesLogin">
                <div className="ToolBarPage">
                  <a href="/account" style={{ textDecoration: "none" }}>
                    <p>
                      <FaUser className="ToolbarIcon" /> {this.props.username}
                    </p>
                  </a>
                </div>
                <div
                  className="ToolBarPage"
                  onClick={() => {
                    this.props.onLogout();
                    this.setState({
                      authenticated: false,
                    });
                    window.location.reload();
                  }}
                >
                  <div className="ToolBarButton">
                    <p style={{ color: "rgba(42, 15, 146, 1)" }}>Logout</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div
          className="ToolbarMobile"
          style={{
            transform: this.state.showMobileToolBar
              ? null
              : "translateX(-500px)",
            height: this.state.showMobileToolBar ? null : "0px",
            // fontSize: this.state.showMobileToolBar ? null : "0px",
          }}
        >
          <div className="ToolbarMobilePage">
            <a href="/create">
              <p>
                <FaPen className="ToolbarIcon" />
                Dashboard
              </p>
            </a>
          </div>
          <div className="ToolbarMobilePage">
            <a href="/blog">
              <p>
                <FaPaperclip className="ToolbarIcon" /> Create
              </p>
            </a>
          </div>
          <div className="ToolbarMobilePage">
            <a href="/pricing">
              <p>
                <FaTag className="ToolbarIcon" /> Contribute
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isauth: state.authenticated,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch({ type: "LOGOUT" }),
  };
};

export default Toolbar;
