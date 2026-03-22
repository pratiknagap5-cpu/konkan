import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="login-modal-overlay" (click)="close()">
      <div class="login-modal" (click)="$event.stopPropagation()">
        <header>
          <h2>Login to MakeMyTrip</h2>
          <button class="close-btn" (click)="close()">×</button>
        </header>
        <form (ngSubmit)="onSubmit()">
          <input type="email" [(ngModel)]="email" name="email" placeholder="Email" required [ngModelOptions]="{standalone: true}">
          <input type="password" [(ngModel)]="password" name="password" placeholder="Password" required [ngModelOptions]="{standalone: true}">
          <button type="submit" class="submit-btn">Login</button>
          <p class="signup-link">Don't have account? <a routerLink="/signup">Sign up</a></p>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .login-modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      animation: modalFadeIn 0.3s ease-out;
    }
    @keyframes modalFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .login-modal {
      background: white;
      border-radius: 20px;
      padding: 2rem;
      max-width: 400px;
      width: 90%;
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      animation: modalSlideUp 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
    }
    @keyframes modalSlideUp {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .login-modal header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }
    .login-modal h2 {
      margin: 0;
      color: #333;
    }
    .close-btn {
      background: none;
      border: none;
      font-size: 2rem;
      cursor: pointer;
      color: #999;
    }
    .login-modal input {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;
      border: 1px solid #ddd;
      border-radius: 10px;
      font-size: 1rem;
    }
    .submit-btn {
      width: 100%;
      background: linear-gradient(135deg, #ff6b35, #ff8e53);
      color: white;
      border: none;
      padding: 1rem;
      border-radius: 10px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    }
    .submit-btn:hover {
      transform: translateY(-1px);
    }
    .signup-link {
      text-align: center;
      margin-top: 1rem;
      color: #666;
    }
  `]
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onSubmit() {
    alert('Logged in successfully!');
    this.close();
  }

  close() {
    this.router.navigate(['/konkan-packages']);
  }
}

