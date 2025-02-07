interface ControlProps {
    value: number;
    min: number;
    max: number;
    step: number;
    label: string;
    onChange: (value: number) => void;
}

type ModelStatus = 'Loading model' | 'Ready' | 'Error';