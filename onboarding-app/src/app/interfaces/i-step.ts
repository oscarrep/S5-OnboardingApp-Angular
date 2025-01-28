export interface IStep {
    title: string;
    description: string;
    img: string;
    bgColor: string;
    currentStep: number;

    element?:HTMLElement;
}
