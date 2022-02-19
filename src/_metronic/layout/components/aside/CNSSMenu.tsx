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
            title='Inscription'
        >
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Demande d'inscription`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Validation d'inscription`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Validation d'adhèsion`}
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to='/crafted/adhesion/demands'
            title='Financement'
            fontIcon='bi-person'
        >
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Listes des adhésions`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Le fichier financier`}
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default CNSSMenu;
