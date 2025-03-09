import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Import CommonModule for interactivity
import { CommonModule } from '@angular/common';

// Import components
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

// Import RouterModule for working navigation
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  // Hamburger Menu Functionality
  menuOpen: boolean = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  // Back to top Functionality
  backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Dark Mode Functionality
  darkMode = false;
  wordmarkPath = 'logos/wordmark-black.svg';
  lettermarkPath = 'logos/lettermark-black.svg';
  modeIcon = 'ri-moon-fill';

  ngOnInit(): void {
    // Load theme preference from localStorage
    const storedTheme = localStorage.getItem('dark-mode');
    this.darkMode = storedTheme === 'true';
    this.updateTheme();
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    localStorage.setItem('dark-mode', String(this.darkMode));
    this.updateTheme();
  }

  private updateTheme(): void {
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
      this.wordmarkPath = 'logos/wordmark-white.svg';
      this.lettermarkPath = 'logos/lettermark-white.svg';
      this.modeIcon = 'ri-sun-fill';
    } else {
      document.body.classList.remove('dark-mode');
      this.wordmarkPath = 'logos/wordmark-black.svg';
      this.lettermarkPath = 'logos/lettermark-black.svg';
      this.modeIcon = 'ri-moon-fill';
    }
  }
}
