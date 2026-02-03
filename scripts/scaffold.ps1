$apps = @(
  "day-01-profile-card",
  "day-02-counter",
  "day-03-simple-todo",
  "day-04-stopwatch",
  "day-05-guess-the-number",
  "day-06-tic-tac-toe",
  "day-07-dynamic-filter-list",
  "day-08-rock-paper-scissors",
  "day-09-accordion-animations",
  "day-10-random-joke-generator",
  "day-11-infinite-scroll",
  "day-12-analog-clock",
  "day-13-feedback-form-template",
  "day-14-contact-form-reactive",
  "day-15-custom-directives",
  "day-16-calculator",
  "day-17-currency-converter",
  "day-18-weather",
  "day-19-emoji-search",
  "day-20-crypto-charts",
  "day-21-calendar",
  "day-22-checkers",
  "day-23-password-security",
  "day-24-minesweeper",
  "day-25-advanced-todo",
  "day-26-user-management-app",
  "day-27-resume-builder",
  "day-28-quiz-app",
  "day-29-typing-game-keyboard-masters",
  "day-30-portfolio"
)

foreach ($app in $apps) {
  $appPath = Join-Path "projects" $app
  if (Test-Path $appPath) {
    Write-Host "Skip (already exists): $app"
    continue
  }

ng generate application $app --routing --style=scss --minimal --interactive=false --defaults
}

Write-Host "Done. Example: ng serve day-01-profile-card"
