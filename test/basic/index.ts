import SubComponent from './tscomponent';

export class Component {
    private id: number;
    private sub: SubComponent;

    public constructor() {
        this.id = 1;
        console.log(this.id);
     }

    public doSomething(): void {
        console.log(`hello `, this.id);
        switch (this.id) {
            case 1:
                break;
            case 2:
                break;
            default:
                break;
        }
    }
}

export function SomeFunction(): void {
    console.log('export function');
    console.log({
        __html: 123,
        yes: 'abc',
        SomethingWrong: '1',
    });
}

export const Sth = <T>(arg: T): T => {
    console.log('abc');
    return arg;
};
