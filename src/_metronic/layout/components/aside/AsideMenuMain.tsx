/* eslint-disable react/jsx-no-target-blank */
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'
import { NavSection } from './menu.types'
import HomeMenu from './HomeMenu'
import AssuranceMenu from './AssuranceMenu'
import CNSSMenu from './CNSSMenu'
import SanadiMenu from './SanadiMenu'

interface IMenuProps {
  navSection: NavSection,
}

export function AsideMenuMain(props: IMenuProps) {
  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'> Tabs </span>
        </div>
      </div>

     {props.navSection == 'ACCEUIL' && <HomeMenu />}
     {props.navSection == 'ASSURANCE' && <AssuranceMenu />}
     {props.navSection == 'CNSS' && <CNSSMenu />}
     {props.navSection == 'SANADI' && <SanadiMenu />}
     
     
     
     {/* <AsideMenuItemWithSub
        to='/crafted/sinister'
        title='Financement'
        icon='/media/icons/duotune/ecommerce/ecm011.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/dashboard' title='Financement' hasBullet={true} />
      </AsideMenuItemWithSub>


      <AsideMenuItemWithSub
        to='/crafted/adhesion'
        title='Adhèsion'
        icon='/media/icons/duotune/files/fil012.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem
          to='/crafted/adhesion/demands'
          title={`Liste des demandes d'adhèsion`}
          hasBullet={true}
        />
        <AsideMenuItem
          to='/crafted/adherant'
          title={`Liste des adherants`}
          hasBullet={true}
        />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/crafted/registered-woman'
        title='Femmes inscrites'
        icon='/media/icons/duotune/general/gen049.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem
          to='/crafted/registered-woman'
          title='Liste de femmes inscrites'
          hasBullet={true}
        />
      </AsideMenuItemWithSub> */}


      {/* <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/apps/chat'
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='/apps/chat/private-chat' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/group-chat' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='/apps/chat/drawer-chat' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub> */}

      <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div>
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotune/general/gen005.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>Changelog {process.env.REACT_APP_VERSION}</span>
        </a>
      </div> */}
    </>
  )
}
