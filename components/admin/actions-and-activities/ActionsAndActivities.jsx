import styles from "./ActionsAndActivities.module.css";
import QuickActions from "./quick-actions/QuickActions";
import RecentActivities from "./recent-activities/RecentActivities";

export default function ActionsAndActivities() {
    return (
        <div className={styles["actions-and-activities"]}>
            <QuickActions />
            <RecentActivities />
        </div>
    );
}