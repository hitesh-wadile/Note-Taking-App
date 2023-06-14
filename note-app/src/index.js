import React from "react";
import ReactDOM from "react-dom";

const App = (
    <div>
    <nav class="side-nav">
        <div class="sign-up">
            <div class="btn">
                <button>Sign Up</button>
            </div>
        </div>
        <div class="nav-elements">
            <div class="create">
                <div class="btn">
                    <button>New Project</button>
                </div>
            </div>
            <div class="main-items">
                <a class=".link" href=""><i class="fas fa-magnifying-glass"></i>Search</a>
                <a class=".link" href="">Home</a>
                <a class=".link" href="">Notes</a>
                <a class=".link" href="">Tasks</a>
            </div>
        </div>
        <div class="features"></div>
    </nav>

    <section>
        <div class="hero">
            <div class="welcome-msg">
                <h2>Welcome back, Hitesh!</h2>
            </div>
            <div class="project-title">
                <p>My Projects</p>
            </div>

            <div class="my-projects">
                <div class="single-project"></div>
                <div class="single-project"></div>
                <div class="single-project"></div>
                <div class="single-project"></div>
                <div class="single-project"></div>
                <div class="single-project"></div>
            </div>
            <div class="note-title">
                <p>My Notes</p>
            </div>

            <div class="my-note">
                <div class="single-note"></div>
                <div class="single-note"></div>
                <div class="single-note"></div>
                <div class="single-note"></div>
                <div class="single-note"></div>
                <div class="single-note"></div>
            </div>
        </div>
    </section>

    </div>
)

ReactDOM.render(<App />,document.getElementById("root"));