import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CHARACTERS, Character } from './data/characters';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // Original signals
  protected readonly title = signal('directorio-kimetsu');
  
  // Filter Signals
  readonly searchQuery = signal('');
  readonly roleFilter = signal<'todos' | 'pilar' | 'luna'>('todos');
  readonly statusFilter = signal<'todos' | 'Activo' | 'Fallecido' | 'Retirado'>('todos');
  readonly elementFilter = signal<string>('todos');
  
  // Selection Signal for Details Drawer
  readonly selectedCharacter = signal<Character | null>(null);

  // Dynamic Element List computed from the dataset
  readonly elementsList = computed(() => {
    const allElements = CHARACTERS.map(c => c.element);
    return ['todos', ...Array.from(new Set(allElements))];
  });

  // Reactive Computed Filtered List
  readonly filteredCharacters = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const role = this.roleFilter();
    const status = this.statusFilter();
    const element = this.elementFilter();

    return CHARACTERS.filter(char => {
      // 1. Search Query filter (matches name, subrole, ability name, element, or seiyuu)
      const matchesQuery = !query ||
        char.name.toLowerCase().includes(query) ||
        char.japaneseName.includes(query) ||
        char.subRole.toLowerCase().includes(query) ||
        char.abilityName.toLowerCase().includes(query) ||
        char.element.toLowerCase().includes(query) ||
        char.seiyuu.toLowerCase().includes(query);

      // 2. Role filter
      const matchesRole = role === 'todos' || char.role === role;

      // 3. Status filter
      const matchesStatus = status === 'todos' || char.status === status;

      // 4. Element filter
      const matchesElement = element === 'todos' || char.element === element;

      return matchesQuery && matchesRole && matchesStatus && matchesElement;
    });
  });

  // Action Methods
  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  selectCharacter(character: Character): void {
    this.selectedCharacter.set(character);
  }

  closeDrawer(): void {
    this.selectedCharacter.set(null);
  }

  setRole(role: 'todos' | 'pilar' | 'luna'): void {
    this.roleFilter.set(role);
  }

  setStatus(status: 'todos' | 'Activo' | 'Fallecido' | 'Retirado'): void {
    this.statusFilter.set(status);
  }

  setElement(element: string): void {
    this.elementFilter.set(element);
  }

  resetFilters(): void {
    this.searchQuery.set('');
    this.roleFilter.set('todos');
    this.statusFilter.set('todos');
    this.elementFilter.set('todos');
  }
}
