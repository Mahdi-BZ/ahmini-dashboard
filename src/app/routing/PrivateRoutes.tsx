import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import AdhesionDemandPage from '../pages/adhesion/adhesionDemandsPage'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import RegisteredWomanPage from '../pages/registeredWoman/RegisteredWomanPage'
import SinisterPage from '../pages/sinister/SinisterPage'
import AdminPage from '../pages/users/AdminPage'
import AmbassadorPage from '../pages/users/AmbassadorPage'
import ParticularsPage from '../pages/users/ParticularsPage'

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />
        <Route path='/crafted/account' component={AccountPage} />
        <Route path='/crafted/users/particular' component={ParticularsPage} />
        <Route path='/crafted/users/admin' component={AdminPage} />
        <Route path='/crafted/users/ambassador' component={AmbassadorPage} />
        <Route path='/crafted/adhesion/demands' component={AdhesionDemandPage} />
        <Route path='/crafted/registered-woman' component={RegisteredWomanPage} />
        <Route path='/crafted/sinister' component={SinisterPage} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
