/* eslint-disable react/jsx-no-target-blank */
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  return (
    <>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'> Tabs </span>
        </div>
      </div>

      <AsideMenuItemWithSub
        to='/crafted/sinister'
        title='Financement'
        icon='/media/new/financement.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/dashboard' title='Financement' hasBullet={true} />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/crafted/users'
        title='Utilisateur'
        icon='/media/new/utilisateur.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/users/admin' title='Liste Administrateurs' hasBullet={true} />
        <AsideMenuItem to='/crafted/users/particular' title='Liste particuliers' hasBullet={true} />
        <AsideMenuItem to='/crafted/users/ambassador' title='Liste ambassadeur' hasBullet={true} />
        {/* <AsideMenuItem to='/crafted/users/association' title='Association' hasBullet={true} /> */}
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/crafted/adhesion'
        title='Adhesions'
        icon='/media/new/adhesion.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem
          to='/crafted/adhesion/demands'
          title={`liste de demande d'adhesion`}
          hasBullet={true}
        />
        {/* <AsideMenuItem to='/crafted/users/particular' title='Particular' hasBullet={true} /> */}
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/crafted/registered-woman'
        title='Femme inscrite'
        icon='/media/new/woman.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem
          to='/crafted/registered-woman'
          title='List de femme inscrite'
          hasBullet={true}
        />
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to='/crafted/sinister'
        title='Sinistres'
        icon='/media/new/alert.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/crafted/sinister' title='Liste de sinistre' hasBullet={true} />
      </AsideMenuItemWithSub>

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
