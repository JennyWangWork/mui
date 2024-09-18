const RecentTalksCardWrapper = styled(Box)(({ theme }: { theme: Theme }) => ({
    width: "216px",
    height: "113px",
    borderRadius: "12px",
    boxShadow: theme.shadows[2],
    padding: "12px 14px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
}));

const TalkNameText = styled(Typography)(({ theme }: { theme: Theme }) => ({
    color: theme.palette.violet[900],
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 2,
}));

const RecentTalksCardWrapper = styled(Box)<{ theme: Theme }>`
    width: 216px;
    height: 113px;
    border-radius: 12px;
    box-shadow: ${(props) => props.theme.shadows[2]};
    padding: 12px 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const TalkNameText = styled(Typography)<{ theme: Theme }>`
    color: ${(props) => props.theme.palette.violet[900]};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
`;
