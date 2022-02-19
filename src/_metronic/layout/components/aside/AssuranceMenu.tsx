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
            to='/crafted/registered-woman'
            title='Financement'
        >
            <AsideMenuItem
            to='/crafted/registered-woman'
            title='Listes des femmes payés/parrainé'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/registered-woman'
            title='Le fichier financier'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to='/crafted/registered-woman'
            title='Paiement'
        >
            <AsideMenuItem
            to='/crafted/registered-woman'
            title='Liste de femmes payées / mois'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/registered-woman'
            title='Listes des femmes non payé plus de mois'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/registered-woman'
            title='Liste des femmes suspendu'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
            to='/crafted/sinister'
            title='Sinistres'
        >
            {/* <AsideMenuItem to='/crafted/sinister' title='Liste des sinistres' hasBullet={true} /> */}
            
            <AsideMenuItem
            to='/crafted/paidsinister'
            title='Demande de sinistre'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/paidsinister'
            title='Validation du sinistre'
            hasBullet={true}
            />
            <AsideMenuItem
            to='/crafted/declaredsinister'
            title='Déclaration du sinistre'
            hasBullet={true}
            />
        </AsideMenuItemWithSub>

    </AsideMenuItemWithSub>
  );
};

export default AssuranceMenu;
