import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuOption } from '../../../interfaces/menu-option.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-search',
      label: 'Buscar',
      subLabel: 'Busca gifs',
      route: '/dashboard/search',
    },
  ];
}
