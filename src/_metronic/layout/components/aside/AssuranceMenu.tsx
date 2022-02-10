import * as React from 'react';
import { AsideMenuItem } from './AsideMenuItem';
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub';

interface IAssuranceMenuProps {
}

const AssuranceMenu: React.FunctionComponent<IAssuranceMenuProps> = (props) => {
  return (
    <AsideMenuItemWithSub to={'/crafted/sinister'} title={'AHMINI ASSUARANCE'} >
        <AsideMenuItemWithSub
            to='/crafted/adhesion/demands'
            title='Inscription'
            fontIcon='bi-person'
            icon='/media/icons/duotune/files/fil012.svg'
        >
            <AsideMenuItem
            to='/crafted/adhesion/demands'
            title={`Liste des demandes d'adhèsion`}
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to='/crafted/registered-woman'
            title='Paiement'
            icon='/media/icons/duotune/general/gen049.svg'
            fontIcon='bi-person'
        >
            <AsideMenuItem
            to='/crafted/registered-woman'
            title='Liste de femmes inscrites'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to='/crafted/sinister'
            title='Sinistres'
            icon='/media/icons/duotune/general/gen044.svg'
            fontIcon='bi-person'
        >
            {/* <AsideMenuItem to='/crafted/sinister' title='Liste des sinistres' hasBullet={true} /> */}
            <AsideMenuItem
            to='/crafted/declaredsinister'
            title='Liste des sinistres déclarés'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/paidsinister'
            title='Liste des sinistres validés'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default AssuranceMenu;
