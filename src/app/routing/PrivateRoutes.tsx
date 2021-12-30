import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import AdhesionDemandPage from '../pages/adhesion/adhesionDemandsPage'
import SingleAdhesionDemandPage from '../pages/adhesion/SingleAdhesionDemandPage'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import newItemPopup from '../pages/dashboard/NewItemPopup'
import {MenuTestPage} from '../pages/MenuTestPage'
import RegisteredWomanPage from '../pages/registeredWoman/RegisteredWomanPage'
import DeclaredSinisterPage from '../pages/sinister/DeclaredSinisterPage'
import PaidSinisterPage from '../pages/sinister/PaidSinisterPage'
import SinisterPage from '../pages/sinister/SinisterPage'
import AddAdminPage from '../pages/users/AddAdminPage'
import AddParticularPage from '../pages/users/AddParticularPage'
import AdminPage from '../pages/users/AdminPage'
import AddAmbassadorPage from '../pages/users/ambassador/AddAmbassadorPage'
import AmbassadorPage from '../pages/users/ambassador/AmbassadorPage'
import SingleAmbassadorPage from '../pages/users/ambassador/SingleAmbassadorPage'
import UpdateAmbassadorPage from '../pages/users/ambassador/UpdateAmbassadorPage'
import ParticularsPage from '../pages/users/ParticularsPage'
import SingleAdminPage from '../pages/users/SingleAdminPage'
import SingleParticularPage from '../pages/users/SingleParticularPage'
import UpdateAdminPage from '../pages/users/UpdateAdminPage'
import UpdateParticularPage from '../pages/users/UpdateParticularPage'

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
        <Route exact path='/crafted/users/particular/update/:id' component={UpdateParticularPage} />
        <Route exact path='/crafted/users/particular/add' component={AddParticularPage} />
        <Route exact path='/crafted/users/particular' component={ParticularsPage} />
        <Route exact path='/crafted/users/particular/:id' component={SingleParticularPage} />
        <Route exact path='/crafted/users/admin/add' component={AddAdminPage} />
        <Route exact path='/crafted/users/admin/update/:id' component={UpdateAdminPage} />
        <Route exact path='/crafted/users/admin/:id' component={SingleAdminPage} />
        <Route exact path='/crafted/users/admin' component={AdminPage} />
        <Route exact path='/crafted/users/ambassador' component={AmbassadorPage} />
        <Route exact path='/crafted/users/ambassador/add' component={AddAmbassadorPage} />
        <Route exact path='/crafted/users/ambassador/update/:id' component={UpdateAmbassadorPage} />
        <Route path='/crafted/users/ambassador/:id' component={SingleAmbassadorPage} />
        <Route exact path='/crafted/adhesion/demands' component={AdhesionDemandPage} />
        <Route path='/crafted/adhesion/demands/:id' component={SingleAdhesionDemandPage} />
        <Route exact path='/crafted/registered-woman' component={RegisteredWomanPage} />
        <Route exact path='/crafted/sinister' component={SinisterPage} />
        <Route exact path='/crafted/declaredsinister' component={DeclaredSinisterPage} />
        <Route exact path='/crafted/paidsinister' component={PaidSinisterPage} />
        <Route exact path='/crafted/newitempopup' component={newItemPopup} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
