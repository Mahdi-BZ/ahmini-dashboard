import * as React from 'react';
import { AsideMenuItem } from './AsideMenuItem';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';

interface ISanadiMenuProps {
}

const SanadiMenu: React.FunctionComponent<ISanadiMenuProps> = (props) => {
  return (
    <AsideMenuItemWithSub to={'/crafted/adhesion/demands'} title={'AHMINI SANADI'} >
        <AsideMenuItemWithSub
            to=''
            title='Inscription'
            fontIcon='bi-person'
        >
            <AsideMenuItem
            to='/crafted/sponsorship/request'
            title={`Demande de parrainages`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/sponsorship/request/admin'
            title={`Liste des parraineurs`}
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to=''
            title='Femme Parrainé'
            fontIcon='bi-person'
        >
            <AsideMenuItem
            to='/crafted/registered-woman'
            title={`Listes des femmes à parrainer`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/placeholder/femme-parainee-cnss'
            title={`Femme parrainé CNSS`}
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Femme parrainé ASSAURANCE`}
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default SanadiMenu;
