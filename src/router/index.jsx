import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from '../pages/Index.jsx';

/**
 * 路由配置
 */
const RouterConfig = () => {
	return () => (
		<Router>
			<Switch>
				<Route path="/" component={Index} />
			</Switch>
		</Router>
	);
}

export default RouterConfig;