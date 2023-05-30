export default class IdGenerator {
    private _actualId!: string;
    private readonly _formerIds: string[];
    private readonly _minLength = 2;
    private readonly _length: number;
    private _numberOfWrongIds = 0;

    constructor(givenLength?: number) {
        this._formerIds = [];
        if (!givenLength || givenLength < this._minLength) {
            givenLength = this._minLength;
        }
        this._length = Math.floor(givenLength);
    }

    createId(): string {
        const id = Math.floor(Math.random() * 10000 * Date.now())
            .toString(36)
            .substring(0, this._length);
        if (this._formerIds.filter(formerId => formerId === id).length === 0) {
            this._formerIds.push(id);
            this._actualId = id;
            return this._actualId;
        }
        this._numberOfWrongIds += 1;
        return this.createId();
    }

    get actualId(): string {
        return this._actualId;
    }

    get formerIds(): string[] {
        return this._formerIds;
    }

    get length(): number {
        return this._length;
    }

    get numberOfWrongIds(): number {
        return this._numberOfWrongIds;
    }
}
