import scssCode from "!raw-loader!./AnimationSequencesExample.scss"
import classnames from "classnames"
import * as React from "react"
import Code from "../Code"
import "./AnimationSequencesExample.scss"
import Drop from "./Drop"
import Grid from "./Grid"

class AnimationSequencesExample extends React.PureComponent {
  state = {
    isAnimating: false,
  }

  replay = () => {
    this.setState({ isAnimating: false }, () => {
      setTimeout(() => {
        this.setState({ isAnimating: true })
      }, 0)
    })
  }

  render() {
    const { isAnimating } = this.state

    return (
      <React.Fragment>
        <Grid className={classnames({ ["is-animating"]: isAnimating })}>
          <Drop classes="spin-1" color="#43E699" onClick={this.replay} />
          <Drop classes="spin-2" color="#43E699" onClick={this.replay} />
          <Drop classes="spin-3" color="#43E699" onClick={this.replay} />
        </Grid>
        <div>
          <Code>{scssCode}</Code>
        </div>
      </React.Fragment>
    )
  }
}

export default AnimationSequencesExample
