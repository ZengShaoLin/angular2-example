(function(app) {
    const title = 'My First Angular2 App';
    const template = 
    `
        <h1>${ title }</h1>
        <form #form="ngForm" (ngSubmit)="login(form)">
            <div class="form-group" [ngClass]="{ 'has-error': !item.username }">
                <label>User Name</label>
                <input type="text" class="form-control" name="username" placeholder="User Name" [(ngModel)]="item.username" required>
                <div class="help-block">
                    <p *ngIf="!item.username">user name is necessary</p>
                </div>
            </div>
            <div class="form-group" [ngClass]="{ 'has-error': !item.password }">
                <label>Password</label>
                <input type="password" class="form-control" name="password" placeholder="Password" [(ngModel)]="item.password" required>
                <div class="help-block">
                    <p *ngIf="!item.password">password is necessary</p>
                </div>
            </div>
            <div class="form-group">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="isRemember" [(ngModel)]="item.isRemember" (click)="change()"> Remember user name
                    </label>
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Login</button>
            </div>
        </form>
    `;

    app.AppComponent = ng.core
        .Component({
            selector: 'form-app',
            template: template
        })
        .Class({
            constructor() {
                this.item = localStorage.userLoginInfo ? JSON.parse(localStorage.userLoginInfo) : {};
            },
            change() {
                setTimeout(() =>{
                    if(this.item.isRemember) {
                        localStorage.userLoginInfo = JSON.stringify(this.item);
                    } else {
                        localStorage.removeItem('userLoginInfo');
                    }
                }, 25);
            },
            login(form) {
                let promise = new Promise((resolve, reject) => {
                    const num = Math.random() * 10;

                    setTimeout(() => num > 8 ? reject('Error user name or password') : resolve('Login success'), 250);
                });

                promise
                    .then(data => alert(data + ', user name: ' + this.item.username))
                    .catch(error => alert(error));
            }
        });
})(window.app || (window.app = {}));
