import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import AddAdhesionDemandPage from '../pages/adhesion/AddAdhesionDemandPage'
import AdhesionDemandPage from '../pages/adhesion/adhesionDemandsPage'
import SingleAdhesionDemandPage from '../pages/adhesion/SingleAdhesionDemandPage'
import UpdateAdhesionDemandPage from '../pages/adhesion/UpdateAdhesionDemand'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import newItemPopup from '../pages/dashboard/NewItemPopup'
import {MenuTestPage} from '../pages/MenuTestPage'
import AddRegisteredWomanPage from '../pages/registeredWoman/AddRegisteredWomanPage'
import RegisteredWomanPage from '../pages/registeredWoman/RegisteredWomanPage'
import SingleRegisteredWomanPage from '../pages/registeredWoman/SingleRegisteredWomanPage'
import UpdateRegisteredWomanPage from '../pages/registeredWoman/UpdateRegisteredWoman'
import DeclaredSinisterPage from '../pages/sinister/DeclaredSinisterPage'
import ValidSinisterPage from '../pages/sinister/ValidSinisterPage'
import SingleSinisterPage from '../pages/sinister/SingleSinisterPage'
import SinisterPage from '../pages/sinister/SinisterPage'
import AddAdminPage from '../pages/users/AddAdminPage'
import AddParticularPage from '../pages/users/AddParticularPage'
import AdminPage from '../pages/users/AdminPage'
import AddAmbassadorPage from '../pages/users/ambassador/AddAmbassadorPage'
import AmbassadorPage from '../pages/users/ambassador/AmbassadorPage'
import AmbassadorSinisterPage from '../pages/users/ambassador/AmbassadorSinistersPage'
import SingleAmbassadorPage from '../pages/users/ambassador/SingleAmbassadorPage'
import UpdateAmbassadorPage from '../pages/users/ambassador/UpdateAmbassadorPage'
import ParticularsPage from '../pages/users/ParticularsPage'
import SingleAdminPage from '../pages/users/SingleAdminPage'
import SingleParticularPage from '../pages/users/SingleParticularPage'
import UpdateAdminPage from '../pages/users/UpdateAdminPage'
import UpdateParticularPage from '../pages/users/UpdateParticularPage'
import AdherantPage from '../pages/adherant/adherantPage'
import AddAdherantPage from '../pages/adherant/AddAdherantPage'
import UpdateAdherantPage from '../pages/adherant/UpdateAdherantDemand'
import SingleAdherantPage from '../pages/adherant/SingleAdherantPage'
import AddSinisterPage from '../pages/sinister/AddSinisterPage'
import FemmeParraine from '../pages/CNSS/FemmeParrainée'
import SponsorshipRequestPage from '../pages/sponsorship/SponsorshipRequestPage'
import AddSponsorshipRequestPage from '../pages/sponsorship/AddSponsorshipRequestPage'
import SingleSponsorshipRequestPage from '../pages/sponsorship/SingleSponsorshipRequestPage'

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
        <Route path='/crafted/users/ambassador/:id' exact component={SingleAmbassadorPage} />
        <Route path='/crafted/users/ambassador/:id/sinisters' component={AmbassadorSinisterPage} />
        <Route exact path='/crafted/adhesion/demands/add' component={AddAdhesionDemandPage} />
        <Route
          exact
          path='/crafted/adhesion/demands/update/:id'
          component={UpdateAdhesionDemandPage}
        />
        <Route exact path='/crafted/adhesion/demands' component={AdhesionDemandPage} />
        <Route path='/crafted/adhesion/demands/:id' component={SingleAdhesionDemandPage} />
        
        <Route exact path='/crafted/adherant' component={AdherantPage} />
        <Route exact path='/crafted/adherant/add' component={AddAdherantPage} />
        <Route exact path='/crafted/adherant/update/:id' component={UpdateAdherantPage} />
        <Route exact path='/crafted/adherant/:id' component={SingleAdherantPage} />
        <Route exact path='/crafted/registered-woman/add' component={AddRegisteredWomanPage} />
        <Route
          exact
          path='/crafted/registered-woman/update/:id'
          component={UpdateRegisteredWomanPage}
        />
        <Route exact path='/crafted/registered-woman' component={RegisteredWomanPage} />
        <Route exact path='/crafted/registered-woman/:id' component={SingleRegisteredWomanPage} />
        <Route exact path='/crafted/sponsorship/request' component={SponsorshipRequestPage} />
        <Route exact path='/crafted/sponsorship/request/admin' component={SponsorshipRequestPage} />
        <Route exact path='/crafted/sponsorship/request/add' component={AddSponsorshipRequestPage} />
        <Route exact path='/crafted/sponsorship/request/admin/add' component={AddSponsorshipRequestPage} />
        <Route exact path='/crafted/sponsorship/request/:id' component={SingleSponsorshipRequestPage} />
        <Route exact path='/crafted/sinister' component={SinisterPage} />
        <Route exact path='/crafted/sinister/add' component={AddSinisterPage} />
        <Route exact path='/crafted/declaredsinister' component={DeclaredSinisterPage} />
        <Route exact path='/crafted/declaredsinister/:id' component={SingleSinisterPage} />
        <Route exact path='/crafted/paidsinister' component={ValidSinisterPage} />
        <Route exact path='/crafted/newitempopup' component={newItemPopup} />
        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        {/* PLACEHOLDER ROUTES */}
        
        <Route exact path='/placeholder/femmeParrainee' component={FemmeParraine} />
        
        <Redirect to='error/404' />

      </Switch>
    </Suspense>
  )
}
