import styled from 'styled-components';

type Props = {
    title: string
    value: number
    color?: string
}

const ResumeItem = ({ title, value, color }: Props) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Value color={color}>R$ {value.toFixed(2)}</Value>
        </Container>
    )
}

const Container = styled.div`
    flex: 1;
`;

const Title = styled.div`
    text-align: center;
    font-weight: bold;
    color: #888;
    margin-bottom: 5px;
`;

const Value = styled.div<{ color?: string }>`
    text-align: center;
    font-weight: bold;
    color: ${props => props.color ?? '#000'};
`;

export default ResumeItem;