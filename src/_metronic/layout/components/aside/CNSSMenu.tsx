import * as React from 'react';
import { AsideMenuItem } from './AsideMenuItem';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';

interface ICNSSMenuProps {
}

const CNSSMenu: React.FunctionComponent<ICNSSMenuProps> = (props) => {
  return (
    <AsideMenuItemWithSub to={'/crafted/adhesion/demands'} title={'AHMINI CNSS'} >
        <AsideMenuItemWithSub
            to='/crafted/adhesion/demands'
            title='Financement'
            fontIcon='bi-person'
        >
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Liste des demandes d'adhèsion`}
            icon='/media/icons/duotune/files/fil012.svg'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default CNSSMenu;
