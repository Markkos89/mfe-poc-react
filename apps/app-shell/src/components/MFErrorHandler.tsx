/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react'

interface IProps {}
interface IState {}

export class MFErrorHandler extends React.Component<
  IProps & LoadableExport.LoadingComponentProps,
  IState
> {
  public render(): JSX.Element {
    if (this.props.error) {
      return (
        <h3>Could not load content. {/* <Button onClick={this.props.retry}>Retry</Button>*/}</h3>
      )
    }
    // else if (this.props.timedOut) {
    //     return (
    //       <h2>
    //         Taking longer than expected... <Button onClick={this.props.retry}>Retry</Button>
    //       </h2>
    //     )
    //   } else if (this.props.pastDelay) {
    //     return <h2>Loading...</h2>
    //   } else {
    return <div>Not found</div>
  }
}
