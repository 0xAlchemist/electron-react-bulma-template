/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

// import './index.css';

//console.log('👋 This message is being logged by "renderer.js", included via webpack');

import React from 'react'
import ReactDOM from 'react-dom'
import './app.scss'

class App extends React.Component {
    render() {
        return(
            <div className="hero is-fullheight is-dark is-bold">
                <div className="hero-body has-text-centered">
                    <div className="container">
                        <h1 className="title is-1 mb-5">Sup Wurrl</h1>
                        <p className="subtitle">Let's build something!</p>
                        <span className="icon">
                            <i className="fas fa-star"></i>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))