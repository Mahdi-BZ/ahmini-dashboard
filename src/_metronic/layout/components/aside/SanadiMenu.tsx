import * as React from 'react';
import { AsideMenuItem } from './AsideMenuItem';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';

interface ISanadiMenuProps {
}

const SanadiMenu: React.FunctionComponent<ISanadiMenuProps> = (props) => {
  return (
    <AsideMenuItemWithSub to={'/crafted/adhesion/demands'} title={'AHMINI SANADI'} >
        <AsideMenuItemWithSub
            to='/crafted/adhesion/demands'
            title='Inscription'
            fontIcon='bi-person'
        >
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Liste des demandes de parrainage`}
            icon='/media/icons/duotune/files/fil012.svg'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default SanadiMenu;
