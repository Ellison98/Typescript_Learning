interface SelectChatRoomProps {
    value: string;
}

const SelectChatRoom: React.FC<SelectChatRoomProps> = ({value}) => {
    return (
        <div>
            {value} 에 대한 채팅방 목록
        </div>
    );
};

export default SelectChatRoom;