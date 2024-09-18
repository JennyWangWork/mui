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

const TalkStatusBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "status",
})<{
    theme: Theme;
    status: string;
}>(({ theme, status }) => {
    let color;
    let backgroundColor;

    switch (status) {
        case "draft":
            color = theme.palette.cyan[700];
            backgroundColor = theme.palette.cyan[100];
            break;
        case "published":
            color = theme.palette.teal[700];
            backgroundColor = theme.palette.teal[100];
            break;
        case "closed":
            color = theme.palette.magenta[700];
            backgroundColor = theme.palette.magenta[100];
            break;
    }

    return {
        width: "fit-content",
        height: "24px",
        color: color,
        backgroundColor: backgroundColor,
        borderRadius: "4px",
        padding: "4px 8px",
    };
});

const TalkStatusBox = styled(Box)<{ theme: Theme; status: string }>(
    ({ theme, status }) => {
        let color;
        let backgroundColor;

        switch (status) {
            case "draft":
                color = theme.palette.cyan[700];
                backgroundColor = theme.palette.cyan[100];
                break;
            case "published":
                color = theme.palette.teal[700];
                backgroundColor = theme.palette.teal[100];
                break;
            case "closed":
                color = theme.palette.magenta[700];
                backgroundColor = theme.palette.magenta[100];
                break;
            default:
                color = theme.palette.text.primary;
                backgroundColor = theme.palette.grey[200]; // Default case, if needed
        }

        return {
            width: "fit-content",
            height: "24px",
            color,
            backgroundColor,
            borderRadius: "4px",
            padding: "4px 8px",
        };
    }
);
