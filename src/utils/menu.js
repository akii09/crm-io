export default [
    {
        name: "Management",
        icon: "mdi-account",
        to: "/management",
        items: [
            { name: "Document", to: "/docs", icon_name: "folder_open", icon_class: "material-symbols-outlined" },
            { name: "Contact", to: "/contact", icon_name: "folder_shared", icon_class: "material-symbols-outlined" },
            { name: "Prospect", to: "/prospect", icon_name: "location_searching", icon_class: "material-symbols-outlined" },
            { name: "Workflow", to: "/workflow", icon_name: "sync", icon_class: "material-symbols-outlined" }
        ]
    },
    {
        name: "Connection",
        icon: "mdi-account",
        to: "/connection",
        items: [
            { name: "Chat Integration", to: "/chat-init", icon_name: "mode_comment", icon_class: "material-symbols-outlined" },
            { name: "Marketing Automation", to: "/marketing-automation", icon_name: "trip", icon_class: "material-symbols-outlined" },
            { name: "Email Integration", to: "/email-init", icon_name: "mail", icon_class: "material-symbols-outlined" }
        ]
    },
    {
        name: "Customer",
        icon: "mdi-account",
        to: "/customer",
        items: [
            { name: "Transaction", to: "/transaction", icon_name: "receipt_long", icon_class: "material-symbols-outlined" },
            { name: "Maintenance", to: "/maintenance", icon_name: "settings", icon_class: "material-symbols-outlined" }
        ]
    }
]