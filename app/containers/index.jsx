import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../util/localStore'
import { CITYNAME } from '../config/localStoreKey'
import * as userInfoActionsFromOtherFile from '../actions/userinfo' 

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
        initDone: false
    }
  }
  render() {
    return (
      <div>
        {   
          this.state.initDone
          ? this.props.children
          : <div>loading</div>
        }
      </div>
    )
  }
  componentDidMount() {
    // 从localstorerage中获取城市
    let cityName = ''
    if (cityName == null) {
      cityName = '北京'
    }

    // 将城市信息存到 redux中
  }
}

export default App;
